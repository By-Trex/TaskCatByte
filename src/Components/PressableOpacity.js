import React, { useCallback } from 'react';
import { PressableProps, Pressable, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';

export interface PressableOpacityProps extends PressableProps {
    /**
     * The opacity to use when `disabled={true}`
     *
     * @default 0.3
     */
    disabledOpacity?: number;
    /**
     * The opacity to animate to when the user presses the button
     *
     * @default 0.2
     */
    activeOpacity?: number;
}

export default function PressableOpacity({
                                             style,
                                             disabled = false,
                                             disabledOpacity = 0.3,
                                             activeOpacity = 0.3,
                                             ...passThroughProps
                                         }: PressableOpacityProps): React.ReactElement {
    const getOpacity = useCallback(
        (pressed: boolean) => {
            if (disabled) {
                return disabledOpacity;
            } else {
                if (pressed) return activeOpacity;
                else return 1;
            }
        },
        [activeOpacity, disabled, disabledOpacity],
    );
    const _style = useCallback(({ pressed }) => [style, { opacity: getOpacity(pressed) }], [getOpacity, style]);

    return <Pressable style={_style} disabled={disabled} {...passThroughProps} />;
}
