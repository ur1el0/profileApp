import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from './components/CustomButton';
import ProfileCard from './components/ProfileCard';

const SAMPLE_PROFILES_POOL = [
  {
    name: 'Tony Stark',
    role: 'Lead Engineer & CEO',
    email: 'tony@starkindustries.com',
    bio: 'Genius inventor, innovator, and philanthropist.',
  },
  {
    name: 'Natasha Romanoff',
    role: 'Security Specialist',
    email: 'natasha@shield.org',
    bio: 'Elite strategist and martial arts expert.',
  },
  {
    name: 'Bruce Wayne',
    role: 'Director',
    email: 'bruce@wayneenterprises.com',
    bio: 'Tech investor and tactical mastermind.',
  },
  {
    name: 'Diana Prince',
    role: 'Antiquities Curator',
    email: 'diana@themyscira.museum',
    bio: 'Historian, diplomat, and guardian of peace.',
  },
  {
    name: 'Clark Kent',
    role: 'Senior Journalist',
    email: 'clark.kent@dailyplanet.com',
    bio: 'Investigative reporter with a heart for justice.',
  },
  {
    name: 'Barry Allen',
    role: 'Forensic Scientist',
    email: 'barry@ccpd.gov',
    bio: 'Quick thinker, problem solver, and runner.',
  },
  {
    name: 'Shuri',
    role: 'Chief Scientist',
    email: 'shuri@wakanda.tech',
    bio: 'Pioneering cutting-edge vibranium technology.',
  },
  {
    name: 'Miles Morales',
    role: 'Graphic Designer',
    email: 'miles@brooklynvisions.edu',
    bio: 'Visual artist and neighborhood protector.',
  },
];

export default function App() {
  const [profiles, setProfiles] = useState([
    {
      id: '1',
      name: 'Peter Parker',
      role: 'Photographer',
      email: 'peter.parker@dailybugle.com',
      bio: 'Freelance photographer and friendly neighborhood hero.',
    },
    {
      id: '2',
      name: 'Peter Quill',
      role: 'Star-Lord / Pilot',
      email: 'star.lord@milano.space',
      bio: 'Intergalactic adventurer and music enthusiast.',
    },
  ]);

  const handleAddProfile = () => {
    const nextIndex = profiles.length % SAMPLE_PROFILES_POOL.length;
    const template = SAMPLE_PROFILES_POOL[nextIndex];
    const newId = String(Date.now());

    const newProfile = {
      id: newId,
      name: template.name,
      role: template.role,
      email: template.email,
      bio: template.bio,
    };

    setProfiles((prev) => [...prev, newProfile]);
  };

  const handleRemoveProfile = (id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>profileApp</Text>
          <Text style={styles.subtitle}>
            Tap the button below to add profile cards to your screen.
          </Text>
        </View>

        {/* Custom Button Component */}
        <View style={styles.buttonWrapper}>
          <CustomButton
            title={`+ Add Profile Card (${profiles.length})`}
            onPress={handleAddProfile}
            variant="primary"
          />
        </View>

        {/* Scrollable Profiles List */}
        <ScrollView
          style={styles.scrollList}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {profiles.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No Profile Cards</Text>
              <Text style={styles.emptySubtitle}>
                Tap the custom button above to add a new profile card!
              </Text>
            </View>
          ) : (
            profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                name={profile.name}
                role={profile.role}
                email={profile.email}
                bio={profile.bio}
                onDelete={() => handleRemoveProfile(profile.id)}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#F2F2F2',
  },
  header: {
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  buttonWrapper: {
    marginBottom: 18,
  },
  scrollList: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 20,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
  },
});
