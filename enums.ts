
/**
 * Enum representing the different permission levels for Android Bluetooth characteristics.
 *
 * - `READABLE`: The characteristic can be read.
 * - `READABLE_ENCRYPTED`: The characteristic can be read, but the data is encrypted.
 * - `READABLE_ENCRYPTED_MITM_PROTECTION`: The characteristic can be read, the data is encrypted, and man-in-the-middle protection is enabled.
 * - `WRITABLE`: The characteristic can be written to.
 * - `WRITABLE_ENCRYPTED`: The characteristic can be written to, and the data is encrypted.
 * - `WRITABLE_ENCRYPTED_MITM_PROTECTION`: The characteristic can be written to, the data is encrypted, and man-in-the-middle protection is enabled.
 * - `WRITABLE_SIGNED`: The characteristic can be written to, and the write operation is signed.
 * - `WRITABLE_SIGNED_MITM`: The characteristic can be written to, the write operation is signed, and man-in-the-middle protection is enabled.
 */
export const enum ANDROID_CHARACTERISTIC_PERMISSIONS {
    READABLE = 1,
    READABLE_ENCRYPTED = 2,
    READABLE_ENCRYPTED_MITM_PROTECTION = 4,
    WRITABLE = 16,
    WRITABLE_ENCRYPTED = 32,
    WRITABLE_ENCRYPTED_MITM_PROTECTION = 64,
    WRITABLE_SIGNED = 128,
    WRITABLE_SIGNED_MITM = 256,
};

/**
 * Defines the properties of an Android characteristic.
 *
 * These properties determine the behavior and capabilities of a characteristic in an Android Bluetooth Low Energy (BLE) device.
 *
 * @remarks
 * These properties are used to configure the characteristics of a BLE service on an Android device.
 */
export const enum ANDROID_CHARACTERISTIC_PROPERTIES {
  BROADCASTABLE = 1,
  READABLE = 2,
  WRITABLE_WITHOUT_RESPONSE = 4,
  WRITABLE = 8,
  SUPPORTS_NOTIFICATION = 16,
  SUPPORTS_INDICATION = 32,
  SIGNED_WRITE = 64,
  EXTENDED_PROPERTIES = 128,
}

/**
 * Represents the different types of errors that can occur when starting Android advertising.
 */
export const enum ANDROID_ADVERTISING_ERROR {
  DATA_TOO_LARGE = 1, // Failed to start advertising as the advertise data to be broadcasted is larger than 31 bytes.
  NO_ADV_INSTANCE = 2, // Failed to start advertising because no advertising instance is available.
  ADV_ALREADY_STARTED = 3, // Failed to start advertising as the advertising is already started.
  INTERNAL_ERROR = 4, // Operation failed due to an internal error.
  UNSUPPORTED_FEATURE = 5, // This feature is not supported on this platform.
}
