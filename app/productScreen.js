import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function StoreScreen() {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const price = 44;
    const total = price * count;
    const styles = StyleSheet.create({
        container: { 
            flex: 1, 
            backgroundColor: '#fff', 
            paddingHorizontal: 10, 
            paddingTop: 0, 
        },
        topBar: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: 15,
            borderRadius: 10,
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            width: '100%',
        },
        headerContainer: {
            backgroundColor: '#4caf50',
            borderRadius: 10,
            paddingBottom: 10,
            marginBottom: 10,
            width:'100%',
            alignItems: 'center', 
        },
        storeLogo: { 
            width: 60, 
            height: 40, 
            resizeMode: 'contain' 
        },
        storeTitle: { 
            fontSize: 40, 
            fontWeight: '900', 
            textAlign: 'center', 
            color: '#000', 
            marginVertical: 5, 
            fontFamily: 'helvetica',
            padding: '5',
            marginTop: '50',
        },
        headerinfo_Container: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginHorizontal: 10, 
            marginBottom: 10, 
            width: '90%',
        },
        headerinfo_Text: { 
            fontSize: 12, 
            color: '#000', 
            fontFamily: 'helvetica',
        },
        searchContainer: { 
            flexDirection: 'row', 
            backgroundColor: '#fefefe', 
            borderRadius: 10, 
            padding: 10, 
            alignItems: 'center', 
            borderColor: '#ff9800',
            borderWidth: '2',
        },
        searchContainer2: {
            flexDirection: 'row',
            backgroundColor: '#fefefe',
            borderRadius: 20,
            alignItems: 'center',
            borderColor: '#000',
            borderWidth: 2,
            width: '60%',
            paddingHorizontal: 10,
            height: 40,
        },
        searchInput: { 
            flex: 1, 
            color: '#000', 
            fontSize: 16,
            fontFamily: 'helvetica',
            marginLeft: 10,
        },
        toggleContainer: { 
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            marginVertical: 5 
        },
        toggleText: { 
            color: '#fff', 
            fontWeight: '600',
            fontFamily: 'helvetica',
        },
        productImg: {
            width: 220,
            height: 220,
            resizeMode: 'contain',
        },
        productImg_Container: {
            alignItems: 'center',
            marginVertical: '25',
            backgroundColor: '#fff',
        },
        productInfo_Container:{
            alignItems: 'center',
            marginVertical: '10',
        },
        productName: {
            fontFamily: 'helvetica',
            fontWeight: '900',
            color: '#000',
            fontSize: '23',
            textAlign: 'center',
        },
        productCategory: {
            fontFamily: 'helvetica',
            fontWeight: '800',
            color: 'grey',
            fontSize: '15',
            textAlign: 'center',
            padding: '8',
        },
        productDescription: {
            fontFamily: 'helvetica',
            fontWeight: '400',
            color: '#000',
            fontSize: '12',
            textAlign: 'center',
            padding: '8',
        },
        buttonContainer1: {
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
        },
        buttonContainer2:{
            alignItems: 'center',
            marginVertical: '10',
        },
        cartButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            borderWidth: 1.5,
            borderRadius: 20,
            padding: 10,
            gap: 10,
            width: 360,
            marginBottom: 15,
        },
        productButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1.5,
            borderRadius: 20,
            paddingHorizontal: 10,
            height: 40,
            gap: 10,
            width: '30%',
        },
        cartButtonText: {
            fontFamily: 'helvetica',
            fontWeight: '600',
            color: '#000',
            fontSize: '15',
            textAlign: 'center',
        },
        bottomNav: { 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: '#fff', 
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            height: 60, 
            borderTopWidth: 0.5, 
            borderColor: '#f6921e',
            borderWidth: 3,
            borderRadius: 15,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderTopWidth: 3,
            marginBottom: 0.5,
        },
        bottomNavImg: { 
            width: 32, 
            height: 32,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => router.push('/storeMenu')}>
                        <Ionicons name="close" size={26} color="#fff" />
                    </TouchableOpacity>

                    <Image source={require('../Media/oxxoLogo.png')} style={styles.storeLogo} />

                    <TouchableOpacity onPress={() => router.push('/mainMenu')}>
                        <Ionicons name="ellipsis-horizontal" size={26} color="#fff" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.storeTitle}>OXXO</Text>

                <View style={styles.headerinfo_Container}>
                    <Text style={styles.headerinfo_Text}>★ 4.5 | 20 mins | $10 Comisión</Text>
                    <Text style={styles.headerinfo_Text}>Horario: 6:00am - 8:00pm</Text>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000" />
                <TextInput placeholder="Buscar en Oxxo" placeholderTextColor="#000" style={styles.searchInput} />
        </View>

        <View style={styles.productImg_Container}>
            <Image source={require('../Media/monsterPink.png')} style={styles.productImg} />
        </View>

        <View style={styles.productInfo_Container}>
            <Text style={styles.productName}>Monster - Ultra Fantasy Ruby Red</Text>
            <Text style={styles.productCategory}>Bebidas Energeticas</Text>
            <Text style={styles.productDescription}>Descripcion: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut</Text>
        </View>

        <View style={styles.buttonContainer1}>
            <View style={styles.productButton}>
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <Ionicons name="remove-circle-outline" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.cartButtonText}>{count}</Text>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Ionicons name="add-circle-outline" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer2}>
                <TextInput placeholder="Instrucciones Especiales" placeholderTextColor="#000" style={styles.searchInput} />
            </View>
        </View>

        <View style={styles.buttonContainer2}>
            <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
                <Text style={styles.cartButtonText}>Agregar {count} al carrito - ${total} MXN</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => router.push('/mainMenu')}>
                <Ionicons name="home-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/home')}>
                <Ionicons name="receipt-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/index')}>
                <Image source={require('../Media/UniBite_Logo_CC1.png')} style={styles.bottomNavImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/orders')}>
                <Ionicons name="fast-food-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/profile')}>
                <Ionicons name="person-outline" size={26} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    );
}