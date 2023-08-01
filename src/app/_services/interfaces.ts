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
    profitLoss: number,
    riskRewardMove : number,
    tradeDecision: TradingDecision,
    enteredAtLTP : number,
    enteredAt: Date,
    orderId: string,
    premiumName: string,
    lotSize: number,
    investedMoney: number,
    exitedAt?: Date
    exitedAtLTP? : number,
    exitedAtIndex?: number,
}