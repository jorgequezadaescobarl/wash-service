import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

export default function PerfilScreen() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>arrow_back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconText}>settings</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar Hero */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitials}>AR</Text>
            </View>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumText}>Premium</Text>
            </View>
          </View>
          <Text style={styles.userName}>Alex Rivera</Text>
          <Text style={styles.userEmail}>alex.rivera@email.com</Text>
        </View>

        {/* Stats Bento */}
        <View style={styles.statsGrid}>
          <View style={styles.statCardLarge}>
            <Text style={[styles.iconText, { color: Colors.primary, fontSize: 26 }]}>
              cleaning_services
            </Text>
            <View style={styles.statValues}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Limpiezas</Text>
            </View>
          </View>
          <View style={styles.statsRight}>
            <View style={styles.statChipSecondary}>
              <Text style={styles.statChipLabel}>Nivel 4</Text>
              <Text style={[styles.iconText, { fontSize: 14, color: Colors.onSecondaryContainer }]}>
                star
              </Text>
            </View>
            <View style={styles.statChipNeutral}>
              <Text style={styles.statChipLabel2}>Mis Puntos</Text>
              <Text style={styles.statPoints}>1,240</Text>
            </View>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Cuenta</Text>
          <View style={styles.menuGroup}>
            {[
              { icon: 'person', label: 'Información Personal' },
              { icon: 'payments', label: 'Métodos de Pago' },
              { icon: 'location_on', label: 'Direcciones Guardadas' },
            ].map((item, i, arr) => (
              <TouchableOpacity
                key={item.label}
                style={[styles.menuItem, i < arr.length - 1 && styles.menuItemBorder]}
                activeOpacity={0.7}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.menuIconWrap}>
                    <Text style={[styles.iconText, { color: Colors.primary, fontSize: 20 }]}>
                      {item.icon}
                    </Text>
                  </View>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </View>
                <Text style={[styles.iconText, { color: Colors.outlineVariant, fontSize: 20 }]}>
                  chevron_right
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Preferencias</Text>
          <View style={styles.menuGroup}>
            <View style={[styles.menuItem, styles.menuItemBorder]}>
              <View style={styles.menuLeft}>
                <View style={[styles.menuIconWrap, { backgroundColor: 'rgba(0,106,99,0.08)' }]}>
                  <Text style={[styles.iconText, { color: Colors.secondary, fontSize: 20 }]}>
                    notifications
                  </Text>
                </View>
                <Text style={styles.menuLabel}>Notificaciones</Text>
              </View>
              <Switch
                value={notificaciones}
                onValueChange={setNotificaciones}
                trackColor={{ false: Colors.surfaceContainerHighest, true: Colors.primary }}
                thumbColor="#fff"
              />
            </View>
            <TouchableOpacity style={[styles.menuItem, styles.menuItemBorder]} activeOpacity={0.7}>
              <View style={styles.menuLeft}>
                <View style={[styles.menuIconWrap, { backgroundColor: 'rgba(0,106,99,0.08)' }]}>
                  <Text style={[styles.iconText, { color: Colors.secondary, fontSize: 20 }]}>
                    language
                  </Text>
                </View>
                <Text style={styles.menuLabel}>Idioma</Text>
              </View>
              <Text style={styles.menuValueText}>Español</Text>
            </TouchableOpacity>
            <View style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.menuIconWrap, { backgroundColor: 'rgba(0,106,99,0.08)' }]}>
                  <Text style={[styles.iconText, { color: Colors.secondary, fontSize: 20 }]}>
                    dark_mode
                  </Text>
                </View>
                <Text style={styles.menuLabel}>Modo Oscuro</Text>
              </View>
              <Switch
                value={modoOscuro}
                onValueChange={setModoOscuro}
                trackColor={{ false: Colors.surfaceContainerHighest, true: Colors.primary }}
                thumbColor="#fff"
              />
            </View>
          </View>
        </View>

        {/* Support & Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Soporte y Legal</Text>
          <View style={styles.menuGroupBordered}>
            {[
              { icon: 'help_center', label: 'Centro de Ayuda' },
              { icon: 'description', label: 'Términos de Servicio' },
              { icon: 'privacy_tip', label: 'Privacidad' },
            ].map((item, i, arr) => (
              <TouchableOpacity
                key={item.label}
                style={[styles.menuItem, i < arr.length - 1 && styles.menuItemBorder]}
                activeOpacity={0.7}
              >
                <View style={styles.menuLeft}>
                  <Text style={[styles.iconText, { color: Colors.outline, fontSize: 20 }]}>
                    {item.icon}
                  </Text>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
          <Text style={[styles.iconText, { color: Colors.error, fontSize: 20 }]}>logout</Text>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.surface },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontFamily: 'MaterialSymbolsOutlined' as any,
    fontSize: 22,
    color: Colors.primary,
  },
  headerTitle: {
    fontFamily: Typography.headlineSemiBold,
    fontSize: 17,
    color: Colors.primary,
    letterSpacing: -0.3,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 100, gap: Spacing.section },
  avatarSection: {
    alignItems: 'center',
    gap: Spacing.sm,
    paddingTop: Spacing.md,
  },
  avatarRing: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 3,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 28,
    color: Colors.primary,
  },
  premiumBadge: {
    position: 'absolute',
    bottom: -6,
    backgroundColor: Colors.secondaryContainer,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: Radius.full,
    ...Shadow.subtle,
  },
  premiumText: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.onSecondaryContainer,
  },
  userName: {
    fontFamily: Typography.headline,
    fontSize: 22,
    color: Colors.onSurface,
    marginTop: 10,
  },
  userEmail: {
    fontFamily: Typography.body,
    fontSize: 14,
    color: Colors.onSurfaceVariant,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  statCardLarge: {
    flex: 1,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    justifyContent: 'space-between',
    height: 120,
    ...Shadow.subtle,
  },
  statValues: { gap: 2 },
  statNumber: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 28,
    color: Colors.onSurface,
  },
  statLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  statsRight: {
    flex: 1,
    gap: Spacing.md,
  },
  statChipSecondary: {
    flex: 1,
    backgroundColor: Colors.secondaryContainer,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statChipNeutral: {
    flex: 1,
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statChipLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: Colors.onSecondaryContainer,
  },
  statChipLabel2: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  statPoints: {
    fontFamily: Typography.bodyBold,
    fontSize: 14,
    color: Colors.onSurface,
  },
  section: { paddingHorizontal: Spacing.lg, gap: Spacing.md },
  sectionLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
    paddingHorizontal: 4,
  },
  menuGroup: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radius.xl,
    overflow: 'hidden',
  },
  menuGroupBordered: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: 'rgba(187,201,199,0.15)',
    overflow: 'hidden',
    ...Shadow.subtle,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187,201,199,0.12)',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  menuIconWrap: {
    width: 38,
    height: 38,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    fontFamily: Typography.bodyMedium,
    fontSize: 15,
    color: Colors.onSurface,
  },
  menuValueText: {
    fontFamily: Typography.bodySemiBold,
    fontSize: 14,
    color: Colors.primary,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.xl,
    marginHorizontal: Spacing.lg,
    borderRadius: Radius.xl,
  },
  logoutText: {
    fontFamily: Typography.bodyBold,
    fontSize: 15,
    color: Colors.error,
  },
});
