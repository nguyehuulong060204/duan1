import classNames from 'classnames/bind'

import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

interface buttonProps {
  to?: string
  href?: string
  outline?: boolean
  background?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  children?: string | React.ReactNode
  className?: string
  small?: boolean
  large?: boolean
}

const Button: React.FC<buttonProps> = ({
  to,
  href,
  outline = false,
  disabled = false,
  background = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick
}) => {
  let Comp: React.ElementType = 'button'
  const props: any = { onClick }

  // remove even listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className!]: className,
    to,
    href,
    outline,
    background,
    leftIcon,
    rightIcon,
    onClick,
    disabled,
    small,
    large
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
