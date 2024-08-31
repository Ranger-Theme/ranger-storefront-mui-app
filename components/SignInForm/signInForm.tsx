/* eslint-disable react/display-name */
import { forwardRef, useRef } from "react";
import TextField from "@mui/material/TextField";

const SignInForm = forwardRef((props, ref: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  console.info("containerRef: ", containerRef);

  return (
    <div ref={containerRef} {...props}>
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        ref={ref}
      />
    </div>
  );
});

export default SignInForm;
