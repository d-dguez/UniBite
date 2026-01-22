import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  const [items, setItems] = useState([
    { id: 1, name: 'Monster - Ruby Red', price: 44, count: 1, img: require('../Media/monsterPink.png') },
    { id: 2, name: 'Lays - Barbecue', price: 30, count: 1, img: require('../Media/laysBBQ.jpg') },
  ]);

  const updateCount = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: Math.max(0, item.count + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);

  const styles = StyleSheet.create({
        container: { 
            flex: 1,
            backgroundColor: '#fff', 
            paddingHorizontal: 10, 
            paddingTop: 0, 
        },
        header: {
            backgroundColor: '#4caf50',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
        },
        storeTitle: { 
            color: '#000', 
            fontWeight: '900', 
            fontSize: 28,
            fontFamily: 'helvetica',
        },
        scroll: { 
            marginBottom: 100,
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            paddingVertical: 10,
        },
        itemImage: { 
            width: 60, 
            height: 80, 
            resizeMode: 'contain', 
            marginRight: 10, 
        },
        itemInfo: { 
            flex: 1, 
        },
        itemName: { 
            fontWeight: '700', 
            fontSize: 14, 
            color: '#000', 
        },
        itemDesc: { color: 'gray', fontSize: 12 },
        itemQty: { color: 'gray', fontSize: 12 },
        qtyContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 10 },
        qtyText: { fontSize: 14, fontWeight: '600' },
        priceTag: {
            backgroundColor: '#f6921e',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
        priceText: { 
          color: '#000', 
          fontWeight: '700', 
          fontSize: 13, 
        },
        notesContainer: { 
          marginVertical: 10, 
        },
        notesTitle: { fontWeight: '700', fontSize: 14, color: '#000' },
        notesInput: {
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginTop: 5,
        },
        subtotalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        },
        subtotalLabel: { fontWeight: '700', fontSize: 14, color: '#000' },
        checkoutButton: {
            backgroundColor: '#ff9800',
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
            marginVertical: 10,
        },
        checkoutText: { color: '#000', fontWeight: '800', fontSize: 18 },
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.storeTitle}>OXXO</Text>
        <Ionicons name="cart-outline" size={26} color="#fff" />
      </View>
      
      <ScrollView style={styles.scroll}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.img} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDesc}>Descripción: Lorem ipsum dolor sit amet...</Text>
              <Text style={styles.itemQty}>Cantidad: 65g</Text>
              <View style={styles.qtyContainer}>
                <TouchableOpacity onPress={() => updateCount(item.id, -1)}>
                  <Ionicons name="remove-circle-outline" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.count}</Text>
                <TouchableOpacity onPress={() => updateCount(item.id, 1)}>
                  <Ionicons name="add-circle-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>${(item.price * item.count).toFixed(2)} MXN</Text>
            </View>
          </View>
        ))}

        <View style={styles.notesContainer}>
          <Text style={styles.notesTitle}>Agregar Notas</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Utensilios, instrucciones especiales, etc."
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.subtotalRow}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>${subtotal.toFixed(2)} MXN</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Ir a la Caja</Text>
      </TouchableOpacity>

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