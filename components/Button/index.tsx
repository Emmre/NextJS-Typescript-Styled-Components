import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { ButtonStyled } from "./styled"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button
