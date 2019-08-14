package ENUMstring;

public enum level {
	HIGH(1),
	MEDIUM(2),
	LOW(0);
	private int level_code;

	private level(int level_code) {
		this.level_code = level_code;
	}
	public int getcode() {
		return level_code;
	}
	
}
