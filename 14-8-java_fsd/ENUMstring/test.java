package ENUMstring;
import static java.lang.System.in;
import static java.lang.System.out;
import java.util.InputMismatchException;
import java.util.Scanner;
public class test {
	public static Scanner scanner=new Scanner(in);
	public static void main(String arg[])
	{
		String name=null;
		try {
			out.print("coach: ");
			name=scanner.next();
			tenniscoach t=new tenniscoach();
			t.createcoach(name, level.LOW);
			out.println(t.getcoachDetails().toString());
		}
		catch(InputMismatchException e)
		{
			System.err.println(e.toString());
		}
		
	}
}
