class StateLoader {

    loadState () {
        try {
            let serializedState = localStorage.getItem("scrum");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState (state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("scrum", serializedState);

        }
        catch (err) {
        }
    }

    initializeState () {
        return;
    }
}

export default new StateLoader();
