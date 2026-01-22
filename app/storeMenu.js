import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StoreScreen() {
    const router = useRouter();
    const categories = [
        {
            title: 'Botanas saladas',
                items: [
                    { name: 'Doritos', desc: 'Sabor Cool Ranch', qty: '65g', img: require('../Media/coolRanch.jpg') },
                    { name: 'Lays BBQ', desc: 'Sabor Barbecue', qty: '70g', img: require('../Media/laysBBQ.jpg') },
                    { name: 'Lays Classic', desc: 'Papas clásicas', qty: '65g', img: require('../Media/laysOg.jpg') },
                    { name: 'Lays SC&O', desc: 'Crema y Especies', qty: '65g', img: require('../Media/laysCreamOnion.png') },
                    { name: 'Doritos Classic', desc: 'Nacho Cheese', qty: '70g', img: require('../Media/doritos.jpg') },
                ],
        },
        {
            title: 'Bebidas energéticas',
                items: [
                    { name: 'Red Bull', desc: 'Green Edition', img: require('../Media/rbGreen.png') },
                    { name: 'Red Bull', desc: 'Sea Blue Edition', img: require('../Media/rbSeaBlue.png') },
                    { name: 'Red Bull', desc: 'Peach Edition', img: require('../Media/rbPeach.jpg') },
                    { name: 'Monster Energy', desc: 'Zero Ultra', img: require('../Media/monsterWhite.png') },
                    { name: 'Monster Energy', desc: 'Zero Ultra', img: require('../Media/monsterPink.png') },
                    { name: 'Monster Energy', desc: 'Zero Ultra', img: require('../Media/monsterGuav.png') },
                ],
        },
        {
            title: 'Refrescos',
                items: [
                    { name: 'Coca Cola', desc: 'Original', img: require('../Media/cocaCola.jpeg') },
                    { name: 'Sprite', desc: 'Lima Limon', img: require('../Media/sprite.png') },
                    { name: 'Fanta', desc: 'Naranja', img: require('../Media/fanta.jpg') },
                    { name: 'Pepsi', desc: 'Original', img: require('../Media/pepsi.jpg') },
                ],
        },
    ];


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
        sectionHeader: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: 15,
        },
        sectionTitle: { 
            fontSize: 16, 
            fontWeight: '700',
            fontFamily: 'helvetica',
        },
        card: { 
            width: 140, 
            backgroundColor: '#fff', 
            borderRadius: 15, 
            marginVertical: 8, 
            alignItems: 'center', 
            padding: 10, 
            elevation: 3, 
            marginRight: 10, 
        },
        image: { 
            width: 80, 
            height: 80, 
            resizeMode: 'contain', 
            marginBottom: 5 
        },
        storeName: { 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: 2, 
            fontFamily: 'helvetica',
        },
        storeInfo: { 
            fontSize: 12, 
            color: 'gray', 
            fontFamily: 'helvetica',
            textAlign: 'center',
        },
        addBtn: { 
            backgroundColor: '#4caf50', 
            borderRadius: 20, 
            padding: 6, 
            marginTop: 5 
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
                    <TouchableOpacity onPress={() => router.push('/mainMenu')}>
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

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {categories.map((section, index) => (
                    <View key={index}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <TouchableOpacity onPress={() => router.push('/mainMenu')}>
                            <Ionicons name="chevron-forward" size={18} color="black" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {section.items.map((item, i) => (
                        <View key={i} style={styles.card}>
                            <TouchableOpacity onPress={() => router.push('/productScreen')}>
                                <Image source={item.img} style={styles.image} />
                            </TouchableOpacity>
                            <Text style={styles.storeName}>{item.name}</Text>
                            {item.desc && <Text style={styles.storeInfo}>{item.desc}</Text>}
                            {item.qty && <Text style={styles.storeInfo}>Cantidad: {item.qty}</Text>}
                            <TouchableOpacity style={styles.addBtn}>
                                <Ionicons name="add" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        ))}
                    </ScrollView>
                    </View>
                ))}
            </ScrollView>

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