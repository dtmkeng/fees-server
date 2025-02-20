import { FeeAdapter } from "../utils/adapters.type";
import volumeAdapter from "@defillama/adapters/volumes/adapters/biswap";
import { getDexChainFees } from "../helpers/getUniSubgraphFees";

const TOTAL_FEES = 0.002;
const PROTOCOL_FEES = 0.0005;

const feeAdapter = getDexChainFees({
  totalFees: TOTAL_FEES,
  protocolFees: PROTOCOL_FEES,
  volumeAdapter
});

const adapter: FeeAdapter = {
  fees: feeAdapter
};


export default adapter;
