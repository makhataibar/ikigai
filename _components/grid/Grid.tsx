import { compact } from "lodash";
import React from "react";
import { View } from "react-native";

import { gridStyles } from "./grid-styles";

export const Grid = ({ style, ...props }: any) => {
  const styles = [style, gridStyles.container];

  return <View style={compact(styles)} {...props} />;
};
