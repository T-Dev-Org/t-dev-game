// [GameUI.jsx]
import React from 'react';
import { useState, useEffect } from 'react';
import { useLifeState } from '../../controller/CharacterLife';
import CornerTopRight from './components/CornerTopRight';
import CreateSaveIndicator from './components/SaveIndicator';
import { useSavingState } from './states/SavingState';

const debug = false;

function print_debug(text) {
  if (debug) {
    console.log(`[GameUI.jsx]: ${text}`);
  }
}

const GameUI = () => {
  const lifeState = useLifeState();
  const [displayLife, setDisplayLife] = useState(true);
  const savingState = useSavingState();

  useEffect(() => {
    print_debug(`Change on LifeValue, is ${lifeState.value} now`);

    if (lifeState.value <= 0) {
      setDisplayLife(false);
      console.log("Mori");
    } else {
      setDisplayLife(true);
    }
  }, [lifeState.value]);

  return (
    <>
      <CornerTopRight />
      {savingState.isSaving &&
        <CreateSaveIndicator />}
    </>
  );
};

export default GameUI;
