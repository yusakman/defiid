export const formatCurrency = (value, currency) => {
  const rateUSD = currency;
  const valueInIDR = value * rateUSD;

  // List of value
  const triliun = 10 ** 12;
  const miliar = 10 ** 9;
  const juta = 10 ** 6;

  let val;

  if (valueInIDR >= triliun) {
    val = (valueInIDR / triliun).toFixed(2);
    return <span className="currency-span">{`IDR ${val} T`}</span>;
  }

  if (valueInIDR < triliun && valueInIDR >= miliar) {
    val = (valueInIDR / miliar).toFixed(2);
    return <span className="currency-span">{`IDR ${val} M`}</span>;
  }

  if (valueInIDR < miliar && valueInIDR >= juta) {
    val = (valueInIDR / juta).toFixed(2);
    return <span className="currency-span">{`IDR ${val} Jt`}</span>;
  }

  if (valueInIDR < juta) {
    return `-`;
  }
};

export const formatChangePrice = (param) => {
  if (param > 0) {
    return `+ ${param.toFixed(2)}%`;
  }

  if (param < 0) {
    return `${Number(param).toFixed(2)}%`;
  }
};

export const formatName = (name, url) => {
  return (
    <span className={`data-name-url`}>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </span>
  );
};

export const formatPool = (pool, id) => {
  return (
    <span className={`pool-id-url`}>
      <a href={`https://defillama.com/yields/pool/${id}`} target="_blank" rel="noreferrer">
        {pool}
      </a>
    </span> 
  )
}

export const formatAPY = (data) => {
  return (`${Number(data).toFixed(2)}%`)
}
