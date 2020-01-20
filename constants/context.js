import React from 'react';

const TradeContext = React.createContext();

export const TradeProvider = TradeContext.Provider;
export const TradeConsumer = TradeContext.Consumer;

export default TradeContext;
