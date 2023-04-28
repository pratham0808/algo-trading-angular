export interface ExecutedTradeInf {
    takeProfit: number,
    stopLossTarget: number,
    enterPrice: number,
    exitPrice? : number,
    enteredAt: Date,
    exitedAt?: Date,
    tradeDecision: TradingDecision,
    orderId: string,
    premiumName: string,
    status: TradeStatus,
    pointsDiff : number,
    investedMoney : number,
    diffInvestment : number,
    lotSize : number
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
