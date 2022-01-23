import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { noiseFunction } from "../../../assets/utils/glsl"

const DistortionMaterial = shaderMaterial(
  {
    time: 0,
    tex: undefined,
    speed: 0,
    rgbShiftStrength: 1,
    hoverValue: 0,
    textureAspect: undefined,
    frameAspect: undefined,
  },
  // vertex shader
  `
      uniform float time;
      uniform float hoverValue;
      varying vec2 vUv;
      ${noiseFunction}
  
      void main() {
        vUv = uv;
  
        vec3 pos = position;
        float noiseFreq = 3.5;
        float noiseAmp = 0.15; 
        vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);
        pos.z += 0.1 * hoverValue * snoise(noisePos) * noiseAmp;
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  
      }
    `,
  // fragment shader
  `
      uniform float time;
      uniform float speed;
      uniform float rgbShiftStrength;
      uniform float hoverValue;
      uniform sampler2D tex;
      varying vec2 vUv;
  
      uniform float textureAspect;
      uniform float frameAspect;
  
  
  
      ${noiseFunction}
  
  
      
      void main() {
        float scaleX = 1.;
        float scaleY = 1.;
        float textureFrameRatio = textureAspect / frameAspect;
        bool portraitTexture = textureAspect < 1.;
        bool portraitFrame = frameAspect < 1.;
        
        if(portraitFrame)
          scaleX = 1.f / textureFrameRatio;
        else
          scaleY = textureFrameRatio;
        
        vec2 textureScale = vec2(scaleX, scaleY);
        vec2 vTexCoordinate = textureScale * (vUv - 0.5) + 0.5;
  
        float r = texture2D(tex, vTexCoordinate).r;
        float g = texture2D(tex, vTexCoordinate - vec2(speed * rgbShiftStrength * 0.012)).g;
        float b = texture2D(tex, vTexCoordinate + vec2(speed * rgbShiftStrength * 0.012)).b;
  
        vec3 color = mix(vec3(r, g, b), vec3(0.), 0.1 - hoverValue * 0.1);
        gl_FragColor = vec4(color, 1.);
      }
    `
)

export default DistortionMaterial
