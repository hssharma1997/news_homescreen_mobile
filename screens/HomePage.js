import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import IconMenu from '../assests/IconMenu'
import Logo from '../assests/logo'

const web3 = require('../assests/image-web-3-mobile.jpg')
const retro = require('../assests/image-retro-pcs.jpg')
const topLaptops = require('../assests/image-top-laptops.jpg')
const gaming = require('../assests/image-gaming-growth.jpg')
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

const newCardInfo = [{
    id: 1,
    Heading: 'Hydrogen VS Electric Cars',
    Info: 'Will hydrogen-fueled cars ever catch up to EVs?'
},
{
    id: 2,
    Heading: 'The Downsides of AI Artistry',
    Info: 'What are the possible adverse effects of on-demand AI image generation?'
},
{
    id: 3,
    Heading: 'Is VC Funding Drying Up?',
    Info: 'Private funding by VC firms is down 50% YOY. We take a look at what that means'
},
]

const pcCardInfo = [{
    id: 1,
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
    img: retro
},
{
    id: 2,
    title: 'Top 10 Laptops of 2022',
    text: 'Our best picks for various needs and budgets.',
    img: topLaptops
},
{
    id: 3,
    title: 'The Growth of Faming',
    text: 'How the pandemic has sparked fresh opportunities.',
    img: gaming
},
]

const HomePage = (props) => {

    const NewCard = ({ item }) => {
        return (
            <View key={item.id} style={{ paddingVertical: 30, borderWidth: item.id == 3 ? 0 : 1, borderBottomColor: '#fff' }}>
                <TouchableOpacity onPress={()=>null}>
                <Text style={{ color: '#fff', marginBottom: 7, fontFamily: 'Inter-ExtraBold', fontSize: 22 }} >{item.Heading}</Text>
                </TouchableOpacity>
                <Text style={{ color: "hsl(233, 8%, 79%)", fontSize: 16, lineHeight: 30 }}>{item.Info}</Text>
            </View>
        )
    }

    const NewsCard = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 35 }}>
                <View style={{ width: '30%' }}>
                    <Image source={item.img} style={{ width: '100%', height: SCREEN_HEIGHT / 5.5, }} resizeMethod="auto" resizeMode="cover" />

                </View>
                <View style={{ width: '60%', paddingLeft: 24 }}>
                    <Text style={{ fontSize: 26, color: 'hsl(233, 8%, 79%)', fontFamily: 'Inter-Bold' }}>{`0${item.id}`}</Text>
               <TouchableOpacity onPress={()=>null}>
                 <Text style={{ fontFamily: 'Inter-ExtraBold', fontSize: 16, marginBottom: 8, color: 'hsl(240, 100%, 5%)' }} >{item.title}</Text>
                  </TouchableOpacity>
                    <Text style={{ lineHeight: 24, color: 'hsl(236, 13%, 42%)', fontFamily: 'Inter-Regular' }}>{item.text}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 }}>
                <View >
                    <Logo />
                </View>
                <TouchableOpacity style={{ justifyContent: 'center' }} onPress={()=>props.navigation.openDrawer()} >
                    <IconMenu />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ marginHorizontal: 16 }} >
                <View style={{ marginBottom: 60 }}>
                    <Image source={web3} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2.4, marginVertical: 12 }} resizeMethod="auto" resizeMode="cover" />
                    <Text style={{ fontSize: 39, color: "#000", fontFamily: 'Inter-ExtraBold', marginBottom: 14 }}>{`The Bright ${'\n'}Future of Web ${'\n'}3.0?`}</Text>

                    <Text style={{ lineHeight: 30, fontSize: 15, fontFamily: 'Inter-Regular' }}>We dive into the next evolution of the web that claims to put the power of the platforms back into that hands of the people. But is it really fulfilling its promise?</Text>

                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 2, height: 50, backgroundColor: "hsl(5, 85%, 63%)", justifyContent: 'center', marginTop: 20 }} onPress={()=>null}>
                        <Text style={{ color: 'white', textAlign: 'center', letterSpacing: 6, fontFamily: 'Inter-Regular' }}>READ MORE</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ backgroundColor: "hsl(240, 100%, 5%)", padding: 16, marginBottom: 60 }}>
                    <Text style={{ color: "hsl(35, 77%, 62%)", fontSize: 32 }}>New</Text>
                    {newCardInfo.map(item => <NewCard item={item} key={item.id} />)}

                </View>
                <View>
                    {pcCardInfo.map(item => <NewsCard item={item} key={item.id} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({})