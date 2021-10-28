import React, { ComponentProps, useCallback, useRef } from 'react'
import { createContext, useContext } from 'react'
import type { FC } from 'react'
import { findNodeHandle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type FocusContextType = {
  autoFocus: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
}
const defaultFocusContext = {
  autoFocus: (event: NativeSyntheticEvent<TextInputFocusEventData>) => {}
}
const AutoFocusContext = createContext<FocusContextType>(
  defaultFocusContext
)
type AutoFocusContextProps = ComponentProps<
  typeof KeyboardAwareScrollView
>

export const AutoFocusProvider: FC<AutoFocusContextProps> = ({
  children,
  ...props
}) => {
  const scrollRef = useRef<KeyboardAwareScrollView | null>(null)

  const scrollToInput = useCallback((reactNode: any)=> {
    scrollRef.current?.scrollToFocusedInput(reactNode)
  }, [])

  const autoFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>)=> {
    scrollToInput(findNodeHandle(event.target))
  }, [])

  const value = {autoFocus}

  return (
    <AutoFocusContext.Provider value={value}>
      <KeyboardAwareScrollView
        {...props}
        style={{flex: 1, width: '100%'}}
        ref={scrollRef}
      >
        {children}
      </KeyboardAwareScrollView>
    </AutoFocusContext.Provider>
  )
}

export const useAutoFocus = () => {
  const {autoFocus} = useContext(AutoFocusContext)
  return autoFocus
}