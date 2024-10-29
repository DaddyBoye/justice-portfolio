import { useState } from 'react';

export function useToggle(initialState = false) {
  const [isActive, setIsActive] = useState(initialState);
  const toggle = () => setIsActive((prev) => !prev);
  return [isActive, toggle];
}
