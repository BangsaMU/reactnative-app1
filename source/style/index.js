import { StyleSheet, Dimensions } from "react-native";


const { heigh, width } = Dimensions.get('window')

const versionApp = { relase: { app: '1.0.1', api: '1.0.1' }, development: { app: '1.1.1', api: '1.1.1' } }
const statusBar = { barStyle: 'dark-content', backgroundColor: "rgba(0,0,0,0)" }
const cssCoreApp = StyleSheet.create({
    pageLogin: { flex: 1, backgroundColor: '#02c842' },
    headerApp: {
        backgroundColor: '#02c842'
    }
})


const cssLogin = StyleSheet.create({
    view1: { marginHorizontal: 18, flex: 1 },
    view2: { width: 200, height: 53, backgroundColor: 'white', marginTop: 10 },
    wrapper1: {
        marginTop: '20%',
        fontSize: 50,
        color: 'white'
    },
    wrapper2: {
        marginTop: 80,
        fontSize: 25,
        color: 'white'
    },
    wrapper3: {
        marginTop: 5,
        fontSize: 15,
        color: 'white'
    },
    wrapper4: {
        maxWidth:200,
        fontSize: 25,
        color: '#333333',
        
    },
})

const cssHome = StyleSheet.create({
    pageHome: { flex: 1, backgroundColor: 'white' },
    imageBanner: {
        height: 140, width: width,
    },
    greetingText: {
        fontSize: 17,
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        top: 30,
        color: '#383838'
    },
    wrapper: {
        marginHorizontal: 18,
    },
    wrapperOvo: {
        marginHorizontal: 18,
        height: 150,
        marginTop: -60,
        backgroundColor: 'white',
        elevation: 4
    },
    textOvo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 10,
    },
    textStyle1: {
        fontSize: 17,
        color: '#383838'
    },
    textStyle2: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 17,
        color: '#383838'
    },
    garisDiOvo: {
        height: .8,
        backgroundColor: '#adadad',
        marginTop: 10
    },

    devider: {
        width: width,
        height: 15,
        backgroundColor: '#ededed',
        marginVertical: 15
    }

})


const cssStyles = StyleSheet.create({
    imageBanner: {
        height: 140, width: width,
    },
    H1: {
        fontSize: 50,
        color: 'white'
    },
    H2: {
        fontSize: 25,
        color: 'white'
    },
    normalText: {
        fontSize: 12,
        color: 'white'
    },
    greetingText: {
        fontSize: 17,
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        top: 30,
        color: '#383838'
    },
    wrapper: {
        marginHorizontal: 18,
    },
    wrapperOvo: {
        marginHorizontal: 18,
        height: 150,
        marginTop: -60,
        backgroundColor: 'white',
        elevation: 4
    },
    textOvo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 10,
    },
    textStyle1: {
        fontSize: 17,
        color: '#383838'
    },
    textStyle2: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 17,
        color: '#383838'
    },
    garisDiOvo: {
        height: .8,
        backgroundColor: '#adadad',
        marginTop: 10
    },

    devider: {
        width: width,
        height: 15,
        backgroundColor: '#ededed',
        marginVertical: 15
    }

})

export { cssCoreApp, cssStyles, cssHome, cssLogin, versionApp, statusBar };