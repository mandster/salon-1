import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

export default function CategoryScroll({ categories }: { categories: { name: string; image: any }[] }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10 }}>
      {categories.map((cat, index) => (
        <TouchableOpacity key={index} style={{ marginRight: 12, alignItems: 'center' }}>
          <Image
            source={cat.image}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginBottom: 6,
            }}
            resizeMode="cover"
          />
          <Text style={{ fontSize: 14 }}>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
