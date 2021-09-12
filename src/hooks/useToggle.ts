import { useState, useCallback } from 'react';

export const useToggle =
  (initialValue: boolean=false, deps: any[]=[]): [Boolean, ()=>void] => {
  const [value, setValue] = useState<Boolean>(initialValue)
  const toggleValue = useCallback(()=>setValue((value)=>!value), deps)
  return [value, toggleValue]
}
