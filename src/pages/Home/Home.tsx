import { useAppSelector, useAppDispatch } from '@store/hooks';
import { decrement, increment, selectCount } from '@store/slices/counterSlice';
import Button from '@components/common/Button/Button';
import styles from './Home.module.scss';

const Home = () => {
  // The `useAppSelector` hook knows the `state` type
  const count = useAppSelector(selectCount);
  
  // The `useAppDispatch` hook has the correct `dispatch` type
  const dispatch = useAppDispatch();

  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>Vite + React + TS Starter</h1>
      <p>A professional, production-ready template.</p>
      <div className={styles.homeCounter}>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className={styles.homeCountValue}>{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Home;