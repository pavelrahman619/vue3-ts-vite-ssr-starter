import { createStore, useStore as vuexUseStore } from 'vuex';
import market, { IMarketState, IMarketStore } from './modules/market';
import user, { IUserState, IUserStore } from './modules/user';

export interface IRootState {
  user: IUserState;
  market: IMarketState;
}

export type IRootStore = IUserStore<Pick<IRootState, 'user'>> & IMarketStore<Pick<IRootState, 'market'>>;

export default () => {
  return createStore<IRootState>({
    strict: true,
    modules: {
      user: user(),
      market: market()
    }
  });
};

export const useStore = () => {
  return vuexUseStore<IRootState>();
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: IRootStore;
  }
}
