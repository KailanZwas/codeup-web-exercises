(async () => {

    async function getUserEvents (username) {
        try {
        let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.gitToken}`}});
        let data = await response.json();
        // console.log(data);
        return data;

        } catch(error){
            console.log(error);
        }
    }

    async function getLastCommit (username) {
        try {
            let response = await getUserEvents(username);
            let lastCommit = response[0].created_at;
            console.log(lastCommit);
            return lastCommit;
        } catch (error) {
            console.log(error);
        }
    }

    console.log(getLastCommit(`KailanZwas`));

    // console.log(getUserEvents(`KailanZwas`));


    async function wait (number) {
        wait(1000).then(() => console.log('You\'ll see this after 1 second'));
        wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    }


})();
