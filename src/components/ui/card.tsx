import type { HTMLAttributes } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps<T> extends HTMLAttributes<T> {
  children?: ReactNode
}

function CardRoot({
  children,
  className,
  ...props
}: CardProps<HTMLDivElement>) {
  return (
    <div className={cn('space-y-7', className)} {...props}>
      {children}
    </div>
  )
}

function CardTitle({
  children,
  className,
  ...props
}: CardProps<HTMLHeadingElement>) {
  return (
    <h3 className={cn('block text-2xl font-semibold', className)} {...props}>
      {children}
    </h3>
  )
}

function CardSubtitle({
  children,
  className,
  ...props
}: CardProps<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('text-muted-foreground block text-sm', className)}
      {...props}
    >
      {children}
    </h4>
  )
}

function CardDescription({
  children,
  className,
  ...props
}: CardProps<HTMLParagraphElement>) {
  return (
    <p className={cn('block', className)} {...props}>
      {children}
    </p>
  )
}

function CardContainer({
  children,
  className,
  ...props
}: CardProps<HTMLDivElement>) {
  return (
    <div className={cn('space-y-2.5', className)} {...props}>
      {children}
    </div>
  )
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Description: CardDescription,
  Container: CardContainer,
}
