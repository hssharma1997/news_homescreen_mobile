import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={17} {...props}>
      <G fill="#00001A" fillRule="evenodd">
        <Path d="M0 0h40v3H0zm0 7h40v3H0zm0 7h40v3H0z" />
        <Path d="M0 0h40v3H0z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
