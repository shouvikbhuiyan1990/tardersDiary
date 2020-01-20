export const calculatePivot = ( high, low, close ) => {
    return ( (high + low + close) / 3 );
}

export const calculateFourPointPivit = ( currentOpening, high, low, close ) => {
    return ( (currentOpening + high + low + close) / 4 );
}

export const calculateSupport = ( high, low, close ) => {
    const pivot = calculatePivot( high, low, close );
    
    const support1 = (2*pivot) - high;
    const support2 = pivot - (high - low);
    const support3 = low - (2 * (high - pivot));

    return [ support1, support2, support3 ];
}


export const calculateResistance = ( high, low, close ) => {
    const pivot = calculatePivot( high, low, close );
    
    const resistance1 = (2*pivot) - low;
    const resistance2 = pivot + (high - low);
    const resistance3 = high + (2 * (pivot - low));

    return [ resistance1, resistance2, resistance3 ];
}

export const calculateDemarkTheory = ( open, high, low, close ) => {
    let demarkConstant = 0,
        predictedHigh = 0,
        predictedLow = 0;
    if( close < open ) {
        demarkConstant = high + low + close + low;
    }
    else if( close > open ) {
        demarkConstant = high + low + close + high;
    }
    else if( close === open ) {
        demarkConstant = high + low + close + close;
    }


    predictedHigh = (demarkConstant / 2) - low;
    predictedLow = (demarkConstant / 2) - high;

    return { predictedHigh, predictedLow };
}