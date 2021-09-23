import axios from 'axios'
import OneSignal from 'react-native-onesignal'; // Import package from node modules

const HOST = '10.10.1.91';

export const getDataUsingSimpleGetCall = () => {
    axios
        .get('https://192.168.1.102/api/otp')
        .then(function (response) {
            // handle success
            console.log(JSON.stringify(response.data));
            return response.data.data;
        })
        .catch(function (error) {
            // handle error
            console.log('error getDataUsingAsyncAwaitGetCall', error.message);
        })
        .finally(function () {
            // always executed
            console.log('Finally called');
        });
};

export const getDataUsingAsyncAwaitGetCall = async () => {
    try {
        const response = await axios.get(
            'http://' + HOST + '/api/otp',
        );
        // alert(JSON.stringify(response.data));

        const { userId } = await OneSignal.getDeviceState();
        console.log(JSON.stringify(response.data));

        let otp = response.data.data;

        const notificationObj = {
            contents: { en: "Kode OTP anda " + otp },
            include_player_ids: [userId]
        };

        const jsonString = JSON.stringify(notificationObj);

        OneSignal.postNotification(jsonString, (success) => {
            console.log("Success:", success);
        }, (error) => {
            console.log("Error:", error);
        });

        return otp;
    } catch (error) {
        // handle error
        console.log('error getDataUsingAsyncAwaitGetCall', error.message);
    }
};



const postDataUsingSimplePostCall = () => {
    axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
        .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
        })
        .catch(function (error) {
            // handle error
            alert(error.message);
        });
};

const multipleRequestsInSingleCall = () => {
    axios
        .all([
            axios
                .get('https://jsonplaceholder.typicode.com/posts/1')
                .then(function (response) {
                    // handle success
                    alert('Post 1 : ' + JSON.stringify(response.data));
                }),
            axios
                .get('https://jsonplaceholder.typicode.com/posts/2')
                .then(function (response) {
                    // handle success
                    alert('Post 2 : ' + JSON.stringify(response.data));
                }),
        ])
        .then(
            axios.spread(function (acct, perms) {
                // Both requests are now complete
                alert('Both requests are now complete');
            }),
        );
};

