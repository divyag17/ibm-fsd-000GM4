package coll;
import java.util.Set;
import java.util.Scanner;
import java.util.HashSet;
import java.util.InputMismatchException;
public class collectiondemo {
 private String str[];
 private Set<String> set;
 static Scanner scanner=new Scanner(System.in);
 public collectiondemo() throws InputMismatchException
 {
	 System.out.print("number of elements");
	 str=new String[scanner.nextInt()];
	 for(int i=0;i<str.length;i++)
	 {
		 System.out.print("name : ");
		 str[i]=scanner.next().toString();
	 }
	 set=new HashSet();
	 for(String s:str)
	 {
		 if(!set.add(s))
		 {
			 System.out.println("duplicate element found");
		 }
	 }
	 
 }
 public void display()
 {
	 for(String s:set)
	 {
		 System.out.println(toString());
	 }
 }
}
