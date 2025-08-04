import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import supabase from '../lib/supabase';


export default function ProfileScreen() {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const { data } = await supabase.auth.getUser();
    const userId = data?.user?.id;
    if (!userId) return;

    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    setProfile(profileData || {});
  };

  const saveProfile = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    await supabase.from('profiles').upsert({
      id: user.id,
      full_name: profile.full_name,
      preferences: profile.preferences || {},
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Full Name</Text>
      <TextInput
        value={profile.full_name}
        onChangeText={(val) => setProfile({ ...profile, full_name: val })}
      />
      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
}
