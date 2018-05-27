export const enum DiscordAPIErrorCodes {
	UNKNOWN_ACCOUNT = 10001,
	UNKNOWN_APPLICATION = 10002,
	UNKNOWN_CHANNEL = 10003,
	UNKNOWN_GUILD = 10004,
	UNKNOWN_INTEGRATION = 10005,
	UNKNOWN_INVITE = 10006,
	UNKNOWN_MEMBER = 10007,
	UNKNOWN_MESSAGE = 10008,
	UNKNOWN_OVERWRITE = 10009,
	UNKNOWN_PROVIDER = 10010,
	UNKNOWN_ROLE = 10011,
	UNKNOWN_TOKEN = 10012,
	UNKNOWN_USER = 10013,
	UNKNOWN_EMOJI = 10014,
	BOTS_CANNOT_USE_THIS_ENDPOINT = 20001,
	ONLY_BOTS_CAN_USE_THIS_ENDPOINT = 20002,
	TOO_MANY_GUILDS = 30001,
	TOO_MANY_FRIENDS = 30002,
	TOO_MANY_PINS = 30003,
	TOO_MANY_ROLES = 30005,
	TOO_MANY_REACTIONS = 30010,
	TOO_MANY_CHANNELS = 30013,
	UNAUTHORIZED = 40001,
	MISSING_ACCESS = 50001,
	INVALID_ACCOUNT_TYPE = 50002,
	CANNOT_EXECUTE_ACTION_ON_A_DM_CHANNEL = 50003,
	WIDGET_DISABLED = 50004,
	CANNOT_EDIT_A_MESSAGE_AUTHORED_BY_ANOTHER_USER = 50005,
	CANNOT_SEND_AN_EMPTY_MESSAGE = 50006,
	CANNOT_SEND_MESSAGES_TO_THIS_USER = 50007,
	CANNOT_SEND_MESSAGES_IN_A_VOICE_CHANNEL = 50008,
	CHANNEL_VERIFICATION_LEVEL_IS_TOO_HIGH = 50009,
	OAUTH2_APPLICATION_LIMIT_REACHED = 50011,
	INVALID_OAUTH_STATE = 50012,
	MISSING_PERMISSIONS = 50013,
	INVALID_AUTH_TOKEN = 50014,
	NOTE_IS_TOO_LONG = 50015,
	TOO_MANY_MESSAGES = 50016,
	WRONG_MESSAGE = 50019,
	SYSTEM_MESSAGE = 50021,
	MESSAGE_IS_TOO_OLD = 50034,
	INVALID_FORM_BODY = 50035,
	INVALID_API_VERSION = 50041,
	REACTION_BLOCKED = 90001,
}
