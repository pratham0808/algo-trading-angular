export interface QuoteObj {
    timestamp: Date,
    open: number,
    close: number,
    high: number,
    low: number,
}

export interface SignalInf {
    timeStamp: Date,
    tradeDecision: TradingDecision,
    indexValue: number
}

export enum TradeStatus {
    PROFIT = 'PROFIT',
    LOSS = 'LOSS',
    LIVE = 'LIVE',
}

export enum InstrumentType {
    NIFTY = 'NIFTY',
    BANKNIFTY = 'BANKNIFTY'
}

export enum TradingDecision {
    ENTERCE = "ENTERCE",
    ENTERPE = "ENTERPE",
    EXITCE = "EXITCE",
    EXITPE = "EXITPE",
    NOTRADE = "NO TRADE",
}

/* ----------------------------------------------------------------------------------------- */

export interface ExecutedTradeInf {
    tradeTakenIndex: number,
    stopLossIndex: number,
    profitTargetIndex: number,
    status: TradeStatus,
    riskRewardMove : number,
    profitLoss: number,
    tradeDecision: TradingDecision,
    enteredAt: Date,
    exitedAt?: Date,
    exitedAtIndex?: number,
}