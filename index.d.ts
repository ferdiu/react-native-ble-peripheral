declare module "react-native-ble-peripheral" {
  /**
   * Adds a service with the specified UUID and primary status.
   * @param UUID - The unique identifier for the service.
   * @param primary - Indicates whether the service is the primary service.
   */
  function addService(UUID: string, primary: boolean): void;
  /**
   * Adds a characteristic to a service.
   *
   * @param ServiceUUID - The UUID of the service to add the characteristic to.
   * @param UUID - The UUID of the characteristic to add.
   * @param permissions - The permissions for the characteristic.
   * @param properties - The properties of the characteristic.
   */
  function addCharacteristicToService(
    ServiceUUID: string,
    UUID: string,
    permissions: number,
    properties: number,
  ): void;
  /**
   * Adds a characteristic to a service with the specified value.
   *
   * @param ServiceUUID - The UUID of the service to add the characteristic to.
   * @param UUID - The UUID of the characteristic to add.
   * @param permissions - The permissions for the characteristic.
   * @param properties - The properties of the characteristic.
   * @param value - The value to set for the characteristic.
   */
  function addCharacteristicToServiceWithValue(
    ServiceUUID: string,
    UUID: string,
    permissions: number,
    properties: number,
    value: string,
  ): void;
  /**
   * Sets the value of a characteristic on a Bluetooth device.
   *
   * @param ServiceUUID - The UUID of the service that the characteristic belongs to.
   * @param CharacteristicUUID - The UUID of the characteristic to set the value for.
   * @param value - The value to set the characteristic to, as a string.
   */
  function setCharacteristicValue(
      ServiceUUID: string,
      CharacteristicUUID: string,
      value: string
  ): void;
  /**
   * Sends a notification to connected devices using the specified service and characteristic UUIDs.
   *
   * @param ServiceUUID - The UUID of the service to use for the notification.
   * @param CharacteristicUUID - The UUID of the characteristic to use for the notification.
   * @param data - The data to send in the notification, as an array of numbers.
   */
  function sendNotificationToDevices(
    ServiceUUID: string,
    CharacteristicUUID: string,
    data: number[],
  ): void;
  /**
   * Starts the advertising mode and returns a promise that resolves to a boolean indicating whether the start was successful.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the start was successful.
   */
  function start(): Promise<boolean>;
  /**
   * Resets the state of the advertising mode.
   */
  function reset(): void;
  /**
   * Stops the advertising mode.
   */
  function stop(): void;
  /**
   * Sets the name of the device show during the scan.
   * @param name - The new name of the device.
   */
  function setName(name: string): void;
  /**
   * Checks if the current environment is in advertising mode.
   * @returns A Promise that resolves to a boolean indicating whether the current environment is in advertising mode.
   */
  function isAdvertising(): Promise<boolean>;
}
