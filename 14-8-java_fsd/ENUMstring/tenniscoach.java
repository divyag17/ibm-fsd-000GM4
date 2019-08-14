package ENUMstring;

public class tenniscoach implements coach{
	private String name;
	private level level;
	@Override
	public String getworkout() {
		// TODO Auto-generated method stub
		return "practice tenis...";
	}
	public void createcoach(String name,level level)
	{
		this.name=name;
		this.level=level;
	}
	public String getName()
	{
		return name;
	
	}
	public void setName(String name) {
		this.name=name;
	}
	public level getLevel()
	{
		return level;
	
	}
	public void setLevel(String name) {
		this.level=level;
	}
	public String getcoachDetails()
	{	StringBuilder sb=new StringBuilder();
		sb.append("today plan:"+getworkout());
		sb.append("\n get level :"+level.getcode());
		return sb.toString();
	}
}
