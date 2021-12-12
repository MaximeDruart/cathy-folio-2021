import React, { forwardRef, useMemo } from "react"
import * as THREE from "three"
import { Effect, BlendFunction } from "postprocessing"

var shader_default60 = `
    uniform vec3 hue;
    uniform float saturation;
    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec3 color = vec3(dot(inputColor.rgb, hue.xyz), dot(inputColor.rgb, hue.zxy), dot(inputColor.rgb, hue.yzx));
        float average = (color.r + color.g + color.b) / 3.0;
        vec3 diff = average - color;
        if(saturation > 0.0) {
            color += diff * (1.0 - 1.0 / (1.001 - saturation));
        } else {
            color += diff * -saturation;
        }
        outputColor = vec4(min(color, 1.0), inputColor.a);
    }
  `

// src/effects/HueSaturationEffect.js
var HueSaturationEffectImpl = class extends Effect {
  constructor({ hue = Math.PI / 2, saturation = -100 } = {}) {
    super("HueSaturationEffect", shader_default60, {
      uniforms: /* @__PURE__ */ new Map([
        ["hue", new THREE.Uniform(new THREE.Vector3())],
        ["saturation", new THREE.Uniform(saturation)],
      ]),
    })
    this.setHue(hue)
  }
  setHue(hue) {
    const s = Math.sin(hue),
      c2 = Math.cos(hue)
    this.uniforms
      .get("hue")
      .value.set(2 * c2, -Math.sqrt(3) * s - c2, Math.sqrt(3) * s - c2)
      .addScalar(1)
      .divideScalar(3)
  }
}

// Effect component
export const FishEyeEffect = forwardRef((fafa, ref) => {
  const effect = useMemo(() => new HueSaturationEffectImpl(), [])
  return <primitive ref={ref} object={effect} dispose={null} />
})
