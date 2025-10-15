import React from 'react'
import clsx from 'clsx';

type Props = {
  as?: React.ElementType,
  className?: string,
  children: React.ReactNode
}
const Bounded = ({
  as: Component = 'section',
  className,
  children,
  ...restProps
}: Props) => {
  return (
    <Component
      className={clsx('px-4 py-10 md:py-14 md:px-6 lg:py-16', className)}
      {...restProps}
    >
      <div className='mx-auto w-full max-w-6xl'>
        {children}
      </div>
    </Component>
  )
}

export default Bounded;
