import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

const DAYS = [
  { day: 'LUN', date: 14 },
  { day: 'MAR', date: 15 },
  { day: 'MIÉ', date: 16 },
  { day: 'JUE', date: 17 },
  { day: 'VIE', date: 18 },
  { day: 'SÁB', date: 19 },
];

const TIMES = ['09:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 AM'];

export default function ReservaScreen() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>menu</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>Pristine</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconText}>notifications</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro */}
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Programa tu limpieza</Text>
          <Text style={styles.introSub}>
            Cada rincón merece un toque de claridad. Configura tu servicio de limpieza a continuación.
          </Text>
        </View>

        {/* Address */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Ubicación del Servicio</Text>
          <View style={styles.addressCard}>
            <View style={styles.addressRow}>
              <View style={styles.addressIconWrap}>
                <Text style={styles.iconText}>location_on</Text>
              </View>
              <View style={styles.addressInputWrap}>
                <TextInput
                  style={styles.addressInput}
                  defaultValue="1242 Serenity Drive, Apt 4B"
                  placeholderTextColor={Colors.outlineVariant}
                />
                <Text style={styles.addressCity}>Los Angeles, CA 90210</Text>
              </View>
            </View>
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapPlaceholderText}>📍 Mapa de Ubicación</Text>
            </View>
          </View>
        </View>

        {/* Date & Time */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Fecha y Hora</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.daysRow}
          >
            {DAYS.map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedDay(i)}
                style={[styles.dayChip, selectedDay === i && styles.dayChipActive]}
              >
                <Text
                  style={[styles.dayText, selectedDay === i && styles.dayTextActive]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[styles.dayNumber, selectedDay === i && styles.dayNumberActive]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.timesGrid}>
            {TIMES.map((time, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedTime(i)}
                style={[styles.timeChip, selectedTime === i && styles.timeChipActive]}
              >
                <Text
                  style={[styles.timeText, selectedTime === i && styles.timeTextActive]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Payment */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Método de Pago</Text>
          <View style={styles.paymentList}>
            <TouchableOpacity
              style={[styles.paymentItem, selectedPayment === 0 && styles.paymentItemActive]}
              onPress={() => setSelectedPayment(0)}
            >
              <View style={styles.paymentLeft}>
                <View style={styles.paymentCardIcon}>
                  <Text style={styles.iconText}>credit_card</Text>
                </View>
                <View>
                  <Text style={styles.paymentName}>•••• •••• •••• 4242</Text>
                  <Text style={styles.paymentSub}>EXPIRA 12/26</Text>
                </View>
              </View>
              <View style={[styles.radio, selectedPayment === 0 && styles.radioActive]}>
                {selectedPayment === 0 && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.paymentItem, styles.paymentItemLow, selectedPayment === 1 && styles.paymentItemActive]}
              onPress={() => setSelectedPayment(1)}
            >
              <View style={styles.paymentLeft}>
                <View style={[styles.paymentCardIcon, { backgroundColor: 'rgba(179,235,255,0.3)' }]}>
                  <Text style={[styles.iconText, { color: Colors.primary }]}>account_balance_wallet</Text>
                </View>
                <View>
                  <Text style={styles.paymentName}>PayPal</Text>
                  <Text style={styles.paymentSub}>pristine.user@example.com</Text>
                </View>
              </View>
              <View style={[styles.radio, selectedPayment === 1 && styles.radioActive]}>
                {selectedPayment === 1 && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Summary & Confirm */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryTop}>
            <View>
              <Text style={styles.summaryService}>Paquete de Limpieza Profunda</Text>
              <View style={styles.summaryDuration}>
                <Text style={[styles.iconText, { fontSize: 16, color: Colors.primary }]}>timer</Text>
                <Text style={styles.summaryDurationText}>3.5 Horas Estimadas</Text>
              </View>
            </View>
            <Text style={styles.summaryPrice}>$145.00</Text>
          </View>

          <TouchableOpacity style={styles.confirmBtn} activeOpacity={0.85}>
            <Text style={styles.confirmBtnText}>Confirmar Limpieza</Text>
          </TouchableOpacity>

          <Text style={styles.summaryNote}>
            No se te cobrará hasta que el servicio termine.
          </Text>
        </View>
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
  logo: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 18,
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 100, gap: Spacing.section },
  intro: { paddingHorizontal: Spacing.lg, gap: 6 },
  introTitle: {
    fontFamily: Typography.headline,
    fontSize: 26,
    color: Colors.onSurface,
    letterSpacing: -0.5,
  },
  introSub: {
    fontFamily: Typography.body,
    fontSize: 14,
    color: Colors.onSurfaceVariant,
    lineHeight: 20,
    opacity: 0.8,
  },
  section: { paddingHorizontal: Spacing.lg, gap: Spacing.md },
  sectionLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.secondary,
  },
  addressCard: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    gap: Spacing.lg,
  },
  addressRow: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  addressIconWrap: {
    width: 44,
    height: 44,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressInputWrap: { flex: 1, gap: 2 },
  addressInput: {
    fontFamily: Typography.headline,
    fontSize: 16,
    color: Colors.onSurface,
    padding: 0,
  },
  addressCity: {
    fontFamily: Typography.body,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  mapPlaceholder: {
    height: 120,
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: Radius['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    fontFamily: Typography.bodyMedium,
    fontSize: 14,
    color: Colors.onSurfaceVariant,
  },
  daysRow: {
    gap: Spacing.md,
    paddingHorizontal: 2,
  },
  dayChip: {
    width: 72,
    height: 100,
    borderRadius: Radius['3xl'],
    backgroundColor: Colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    ...Shadow.subtle,
  },
  dayChipActive: {
    backgroundColor: Colors.primary,
  },
  dayText: {
    fontFamily: Typography.bodyMedium,
    fontSize: 11,
    color: Colors.onSurface,
    opacity: 0.6,
  },
  dayTextActive: { color: '#fff', opacity: 0.85 },
  dayNumber: {
    fontFamily: Typography.headline,
    fontSize: 20,
    color: Colors.onSurface,
  },
  dayNumberActive: { color: '#fff' },
  timesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  timeChip: {
    flex: 1,
    minWidth: '30%',
    paddingVertical: 12,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.xl,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
  },
  timeChipActive: {
    backgroundColor: Colors.primary,
  },
  timeText: {
    fontFamily: Typography.bodySemiBold,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  timeTextActive: { color: '#fff' },
  paymentList: { gap: Spacing.md },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.xl,
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius['2xl'],
    ...Shadow.subtle,
  },
  paymentItemLow: { backgroundColor: Colors.surfaceContainerLow },
  paymentItemActive: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  paymentLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  paymentCardIcon: {
    width: 48,
    height: 36,
    backgroundColor: Colors.surfaceContainerHigh,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentName: {
    fontFamily: Typography.bodyBold,
    fontSize: 13,
    color: Colors.onSurface,
  },
  paymentSub: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
    opacity: 0.6,
    marginTop: 2,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.outlineVariant,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: { borderColor: Colors.primary },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  summaryCard: {
    marginHorizontal: Spacing.lg,
    backgroundColor: Colors.surfaceBright,
    borderRadius: Radius['4xl'],
    padding: Spacing['2xl'],
    gap: Spacing.lg,
    ...Shadow.ambient,
  },
  summaryTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  summaryService: {
    fontFamily: Typography.bodyMedium,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
    marginBottom: 4,
  },
  summaryDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  summaryDurationText: {
    fontFamily: Typography.body,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  summaryPrice: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 28,
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  confirmBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: Radius['2xl'],
    alignItems: 'center',
  },
  confirmBtnText: {
    fontFamily: Typography.headline,
    fontSize: 17,
    color: '#fff',
  },
  summaryNote: {
    fontFamily: Typography.body,
    fontSize: 11,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
    opacity: 0.6,
  },
});
