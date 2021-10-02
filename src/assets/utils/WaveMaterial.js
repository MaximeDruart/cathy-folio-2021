import * as THREE from "three"
import { extend } from "@react-three/fiber"
import guid from "short-uuid"
import { noiseFunction } from "./glsl"

// This shader is from Bruno Simons Threejs-Journey: https://threejs-journey.xyz
class WaveMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        tex: { value: undefined },
        mouse: {
          value: { x: -10, y: -10 },
        },
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
      fragmentShader: `
      uniform float time;
      uniform sampler2D tex;
      uniform vec2 mouse;
      varying vec2 vUv;

      ${noiseFunction}
      
      void main() {
        float pct = 1. - smoothstep(0., 0.4,distance(vUv,vec2(mouse)));
        gl_FragColor = texture2D(tex, vUv + (0.005 + 0.01 * pct)*snoise(vec3(vUv *30.0, time * 0.45)));
        // 0.004 : force de la distortion, une valeur plus haute = plus de mouvement
        // 30.0 : scale du noise, valeur plus haute = les distortions sont plus nombreuses mais plus petites
        // 0.45 : vitesse
      }`,
    })
  }

  set time(v) { this.uniforms.time.value = v } // prettier-ignore
  get time() { return this.uniforms.time.value } // prettier-ignore
  get tex() { return this.uniforms.tex.value } // prettier-ignore
  set tex(t) {  this.uniforms.tex.value = t } // prettier-ignore
  get mouse() { return this.uniforms.mouse.value } // prettier-ignore
  set mouse(m) {  this.uniforms.mouse.value = m } // prettier-ignore
}

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
WaveMaterial.key = guid.generate()
// Make the material available in JSX as <waveMaterial />
extend({ WaveMaterial })

export { WaveMaterial }
