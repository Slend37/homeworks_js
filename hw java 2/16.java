import java.util.Scanner;

public class Main
{
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.println("Enter number: ");
        int k = reader.nextInt();
        reader.close();
        
        if (k%3 == 0  || k%5 == 0){
            System.out.println("YES");   
        }else{
            System.out.println("NO");
        }
    }
}
