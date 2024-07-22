"use client";
import React, { useRef, useEffect } from "react";


const useEffectOnce = <Type>(callback: () => void, when: Type) => {
  const hasRunOnce = useRef(false);
  useEffect(() => {
    if (when && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
    // eslint-disable-next-line
  }, [when]);
};

export default useEffectOnce;
