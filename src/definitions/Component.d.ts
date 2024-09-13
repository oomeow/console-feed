import type { Opts } from 'linkifyjs'
import { Methods } from './Methods'
import { Payload } from './Payload'
import { Styles } from './Styles'

export type Variants = 'light' | 'dark'

export interface Theme {
  variant: Variants
  styles: Styles
}

export interface Context extends Theme {
  method: Methods
}

export interface Message extends Payload {
  data: any[]
  amount?: number
}

export interface Props {
  logs: Message[]
  variant?: Variants
  styles?: Styles
  filter?: Methods[]
  searchKeywords?: string
  logFilter?: Function
  logGrouping?: Boolean
  linkifyOptions?: Opts
}

export interface MessageProps {
  log: Message
  linkifyOptions?: Opts
}
