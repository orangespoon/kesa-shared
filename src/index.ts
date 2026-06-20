export const QUEUE_TRADE_ORDERS   = 'trade-orders'          as const
export const QUEUE_TRADE_APPROVAL = 'trade-orders-approval' as const

export interface TradeJobData {
  userId:        string
  ticker:        string
  side:          'BUY' | 'SELL'
  quantity:      number | null
  orderType:     'market' | 'limit' | 'stop' | 'stop_limit'
  limitPrice:    number | null
  stopPrice:     number | null
  timeValidity:  string | null
  extendedHours: boolean
  source:        'MANUAL' | 'AGENT'
  agentConfigId: number | null
  buyValue:      number | null
  buySource:     'FIXED_AMOUNT' | 'PCT_OF_CASH' | null
  triggerPrice:  number | null
}
