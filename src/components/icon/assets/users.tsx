/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const EuiIconUsers = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M5.482 4.344a2 2 0 10-2.963 0c-.08.042-.156.087-.23.136-.457.305-.75.704-.933 1.073A3.457 3.457 0 001 6.978V9a1 1 0 001 1h2.5a3.69 3.69 0 01.684-.962L5.171 9H2V7s0-2 2-2c1.007 0 1.507.507 1.755 1.01.225-.254.493-.47.793-.636a2.717 2.717 0 00-1.066-1.03zM4 4a1 1 0 100-2 1 1 0 000 2zm10 6h-2.5a3.684 3.684 0 00-.684-.962L10.829 9H14V7s0-2-2-2c-1.007 0-1.507.507-1.755 1.01a3.012 3.012 0 00-.793-.636 2.716 2.716 0 011.066-1.03 2 2 0 112.963 0c.08.042.156.087.23.136.457.305.75.704.933 1.073A3.453 3.453 0 0115 6.944V9a1 1 0 01-1 1zm-2-6a1 1 0 100-2 1 1 0 000 2z"
    />
    <path
      fillRule="evenodd"
      d="M10 8c0 .517-.196.989-.518 1.344a2.755 2.755 0 011.163 1.21A3.453 3.453 0 0111 11.977V14a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.022a2.005 2.005 0 01.006-.135 3.456 3.456 0 01.35-1.29 2.755 2.755 0 011.162-1.21A2 2 0 1110 8zm-4 4v2h4v-2s0-2-2-2-2 2-2 2zm3-4a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
);

export const icon = EuiIconUsers;
