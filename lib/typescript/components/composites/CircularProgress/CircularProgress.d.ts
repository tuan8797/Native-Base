import React from 'react';
import type { ICircularProgressProps } from './types';
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("../../primitives/Box").InterfaceBoxProps<ICircularProgressProps> & {
    style?: import("react-native").ViewStyle | undefined;
    children?: string | JSX.Element | JSX.Element[] | undefined;
    value: number;
    size?: import("../../types").ResponsiveValue<number | "px" | "full" | "sm" | "6" | "2xs" | "2" | "8" | "xs" | "3" | "12" | "md" | "4" | "16" | "xl" | "5" | "24" | "32" | "7" | "0.5" | "2.5" | "lg" | "1" | "2xl" | "1.5" | "10" | "20" | "64" | "0" | "80" | (string & {}) | "3.5" | "9" | "40" | "48" | "56" | "72" | "96" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "container" | "3xs">;
    thickness?: number | undefined;
    colorScheme?: import("../../types").ColorSchemeType;
    color?: import("../../types").ResponsiveValue<"contrastThreshold" | "white" | "black" | "lightText" | "darkText" | "light.50" | "light.100" | "light.200" | "light.300" | "light.400" | "light.500" | "light.600" | "light.700" | "light.800" | "light.900" | "dark.50" | "dark.100" | "dark.200" | "dark.300" | "dark.400" | "dark.500" | "dark.600" | "dark.700" | "dark.800" | "dark.900" | "text.50" | "text.100" | "text.200" | "text.300" | "text.400" | "text.500" | "text.600" | "text.700" | "text.800" | "text.900" | "rose.50" | "rose.100" | "rose.200" | "rose.300" | "rose.400" | "rose.500" | "rose.600" | "rose.700" | "rose.800" | "rose.900" | "pink.50" | "pink.100" | "pink.200" | "pink.300" | "pink.400" | "pink.500" | "pink.600" | "pink.700" | "pink.800" | "pink.900" | "fuchsia.50" | "fuchsia.100" | "fuchsia.200" | "fuchsia.300" | "fuchsia.400" | "fuchsia.500" | "fuchsia.600" | "fuchsia.700" | "fuchsia.800" | "fuchsia.900" | "purple.50" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "purple.500" | "purple.600" | "purple.700" | "purple.800" | "purple.900" | "violet.50" | "violet.100" | "violet.200" | "violet.300" | "violet.400" | "violet.500" | "violet.600" | "violet.700" | "violet.800" | "violet.900" | "indigo.50" | "indigo.100" | "indigo.200" | "indigo.300" | "indigo.400" | "indigo.500" | "indigo.600" | "indigo.700" | "indigo.800" | "indigo.900" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "lightBlue.50" | "lightBlue.100" | "lightBlue.200" | "lightBlue.300" | "lightBlue.400" | "lightBlue.500" | "lightBlue.600" | "lightBlue.700" | "lightBlue.800" | "lightBlue.900" | "darkBlue.50" | "darkBlue.100" | "darkBlue.200" | "darkBlue.300" | "darkBlue.400" | "darkBlue.500" | "darkBlue.600" | "darkBlue.700" | "darkBlue.800" | "darkBlue.900" | "cyan.50" | "cyan.100" | "cyan.200" | "cyan.300" | "cyan.400" | "cyan.500" | "cyan.600" | "cyan.700" | "cyan.800" | "cyan.900" | "teal.50" | "teal.100" | "teal.200" | "teal.300" | "teal.400" | "teal.500" | "teal.600" | "teal.700" | "teal.800" | "teal.900" | "emerald.50" | "emerald.100" | "emerald.200" | "emerald.300" | "emerald.400" | "emerald.500" | "emerald.600" | "emerald.700" | "emerald.800" | "emerald.900" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "lime.50" | "lime.100" | "lime.200" | "lime.300" | "lime.400" | "lime.500" | "lime.600" | "lime.700" | "lime.800" | "lime.900" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "amber.50" | "amber.100" | "amber.200" | "amber.300" | "amber.400" | "amber.500" | "amber.600" | "amber.700" | "amber.800" | "amber.900" | "orange.50" | "orange.100" | "orange.200" | "orange.300" | "orange.400" | "orange.500" | "orange.600" | "orange.700" | "orange.800" | "orange.900" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "warmGray.50" | "warmGray.100" | "warmGray.200" | "warmGray.300" | "warmGray.400" | "warmGray.500" | "warmGray.600" | "warmGray.700" | "warmGray.800" | "warmGray.900" | "trueGray.50" | "trueGray.100" | "trueGray.200" | "trueGray.300" | "trueGray.400" | "trueGray.500" | "trueGray.600" | "trueGray.700" | "trueGray.800" | "trueGray.900" | "gray.50" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "coolGray.50" | "coolGray.100" | "coolGray.200" | "coolGray.300" | "coolGray.400" | "coolGray.500" | "coolGray.600" | "coolGray.700" | "coolGray.800" | "coolGray.900" | "blueGray.50" | "blueGray.100" | "blueGray.200" | "blueGray.300" | "blueGray.400" | "blueGray.500" | "blueGray.600" | "blueGray.700" | "blueGray.800" | "blueGray.900" | "danger.50" | "danger.100" | "danger.200" | "danger.300" | "danger.400" | "danger.500" | "danger.600" | "danger.700" | "danger.800" | "danger.900" | "error.50" | "error.100" | "error.200" | "error.300" | "error.400" | "error.500" | "error.600" | "error.700" | "error.800" | "error.900" | "success.50" | "success.100" | "success.200" | "success.300" | "success.400" | "success.500" | "success.600" | "success.700" | "success.800" | "success.900" | "warning.50" | "warning.100" | "warning.200" | "warning.300" | "warning.400" | "warning.500" | "warning.600" | "warning.700" | "warning.800" | "warning.900" | "muted.50" | "muted.100" | "muted.200" | "muted.300" | "muted.400" | "muted.500" | "muted.600" | "muted.700" | "muted.800" | "muted.900" | "primary.50" | "primary.100" | "primary.200" | "primary.300" | "primary.400" | "primary.500" | "primary.600" | "primary.700" | "primary.800" | "primary.900" | "info.50" | "info.100" | "info.200" | "info.300" | "info.400" | "info.500" | "info.600" | "info.700" | "info.800" | "info.900" | "secondary.50" | "secondary.100" | "secondary.200" | "secondary.300" | "secondary.400" | "secondary.500" | "secondary.600" | "secondary.700" | "secondary.800" | "secondary.900" | "tertiary.50" | "tertiary.100" | "tertiary.200" | "tertiary.300" | "tertiary.400" | "tertiary.500" | "tertiary.600" | "tertiary.700" | "tertiary.800" | "tertiary.900" | (string & {})>;
    trackColor?: import("../../types").ResponsiveValue<"contrastThreshold" | "white" | "black" | "lightText" | "darkText" | "light.50" | "light.100" | "light.200" | "light.300" | "light.400" | "light.500" | "light.600" | "light.700" | "light.800" | "light.900" | "dark.50" | "dark.100" | "dark.200" | "dark.300" | "dark.400" | "dark.500" | "dark.600" | "dark.700" | "dark.800" | "dark.900" | "text.50" | "text.100" | "text.200" | "text.300" | "text.400" | "text.500" | "text.600" | "text.700" | "text.800" | "text.900" | "rose.50" | "rose.100" | "rose.200" | "rose.300" | "rose.400" | "rose.500" | "rose.600" | "rose.700" | "rose.800" | "rose.900" | "pink.50" | "pink.100" | "pink.200" | "pink.300" | "pink.400" | "pink.500" | "pink.600" | "pink.700" | "pink.800" | "pink.900" | "fuchsia.50" | "fuchsia.100" | "fuchsia.200" | "fuchsia.300" | "fuchsia.400" | "fuchsia.500" | "fuchsia.600" | "fuchsia.700" | "fuchsia.800" | "fuchsia.900" | "purple.50" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "purple.500" | "purple.600" | "purple.700" | "purple.800" | "purple.900" | "violet.50" | "violet.100" | "violet.200" | "violet.300" | "violet.400" | "violet.500" | "violet.600" | "violet.700" | "violet.800" | "violet.900" | "indigo.50" | "indigo.100" | "indigo.200" | "indigo.300" | "indigo.400" | "indigo.500" | "indigo.600" | "indigo.700" | "indigo.800" | "indigo.900" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "lightBlue.50" | "lightBlue.100" | "lightBlue.200" | "lightBlue.300" | "lightBlue.400" | "lightBlue.500" | "lightBlue.600" | "lightBlue.700" | "lightBlue.800" | "lightBlue.900" | "darkBlue.50" | "darkBlue.100" | "darkBlue.200" | "darkBlue.300" | "darkBlue.400" | "darkBlue.500" | "darkBlue.600" | "darkBlue.700" | "darkBlue.800" | "darkBlue.900" | "cyan.50" | "cyan.100" | "cyan.200" | "cyan.300" | "cyan.400" | "cyan.500" | "cyan.600" | "cyan.700" | "cyan.800" | "cyan.900" | "teal.50" | "teal.100" | "teal.200" | "teal.300" | "teal.400" | "teal.500" | "teal.600" | "teal.700" | "teal.800" | "teal.900" | "emerald.50" | "emerald.100" | "emerald.200" | "emerald.300" | "emerald.400" | "emerald.500" | "emerald.600" | "emerald.700" | "emerald.800" | "emerald.900" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "lime.50" | "lime.100" | "lime.200" | "lime.300" | "lime.400" | "lime.500" | "lime.600" | "lime.700" | "lime.800" | "lime.900" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "amber.50" | "amber.100" | "amber.200" | "amber.300" | "amber.400" | "amber.500" | "amber.600" | "amber.700" | "amber.800" | "amber.900" | "orange.50" | "orange.100" | "orange.200" | "orange.300" | "orange.400" | "orange.500" | "orange.600" | "orange.700" | "orange.800" | "orange.900" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "warmGray.50" | "warmGray.100" | "warmGray.200" | "warmGray.300" | "warmGray.400" | "warmGray.500" | "warmGray.600" | "warmGray.700" | "warmGray.800" | "warmGray.900" | "trueGray.50" | "trueGray.100" | "trueGray.200" | "trueGray.300" | "trueGray.400" | "trueGray.500" | "trueGray.600" | "trueGray.700" | "trueGray.800" | "trueGray.900" | "gray.50" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "coolGray.50" | "coolGray.100" | "coolGray.200" | "coolGray.300" | "coolGray.400" | "coolGray.500" | "coolGray.600" | "coolGray.700" | "coolGray.800" | "coolGray.900" | "blueGray.50" | "blueGray.100" | "blueGray.200" | "blueGray.300" | "blueGray.400" | "blueGray.500" | "blueGray.600" | "blueGray.700" | "blueGray.800" | "blueGray.900" | "danger.50" | "danger.100" | "danger.200" | "danger.300" | "danger.400" | "danger.500" | "danger.600" | "danger.700" | "danger.800" | "danger.900" | "error.50" | "error.100" | "error.200" | "error.300" | "error.400" | "error.500" | "error.600" | "error.700" | "error.800" | "error.900" | "success.50" | "success.100" | "success.200" | "success.300" | "success.400" | "success.500" | "success.600" | "success.700" | "success.800" | "success.900" | "warning.50" | "warning.100" | "warning.200" | "warning.300" | "warning.400" | "warning.500" | "warning.600" | "warning.700" | "warning.800" | "warning.900" | "muted.50" | "muted.100" | "muted.200" | "muted.300" | "muted.400" | "muted.500" | "muted.600" | "muted.700" | "muted.800" | "muted.900" | "primary.50" | "primary.100" | "primary.200" | "primary.300" | "primary.400" | "primary.500" | "primary.600" | "primary.700" | "primary.800" | "primary.900" | "info.50" | "info.100" | "info.200" | "info.300" | "info.400" | "info.500" | "info.600" | "info.700" | "info.800" | "info.900" | "secondary.50" | "secondary.100" | "secondary.200" | "secondary.300" | "secondary.400" | "secondary.500" | "secondary.600" | "secondary.700" | "secondary.800" | "secondary.900" | "tertiary.50" | "tertiary.100" | "tertiary.200" | "tertiary.300" | "tertiary.400" | "tertiary.500" | "tertiary.600" | "tertiary.700" | "tertiary.800" | "tertiary.900" | (string & {})>;
    isIndeterminate?: boolean | undefined;
    max?: number | undefined;
    min?: number | undefined;
    _text?: import("../../primitives").ITextProps | undefined;
} & Partial<{}> & {
    variant?: unknown;
    size?: import("../../types").ThemeComponentSizeType<"CircularProgress">;
    colorScheme?: import("../../types").ColorSchemeType;
} & React.RefAttributes<unknown>>>;
export default _default;
//# sourceMappingURL=CircularProgress.d.ts.map