// 예시 2 명령줄 프로그램 쪼개기(자바) JSON 파일에 담긴 주문의 개수를 세는 자바 프로그램
public static void main(String[] args) {
    try {
        if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
        String filename = args[args.length - 1];
        File input = Paths.get(filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
            System.out.println(Stream.of(orders)
                                    .filter(o -> "ready".equals(o.status))
                                    .count());
         else 
            System.out.println(orders.length);
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}
// 위 코드는 두 가지 일을 한다.
// 하나 주문 목록을 읽어서 개수를 센다.
// 둘 명령줄 인수를 담은 배열을 읽어서 프로그램 동작을 결정한다.
// 이 두 가지 일을 분리하면 프로그램에 지정할 수 있는 옵션이나 스위치가 늘어나도 코드를 수정하기 쉽다.

// Step 1 자바로 작성된 명령줄 프로그램을 테스트하기 어려움, 과정이 느리고 복잡
// 일반적인 JUnit 호출로 자바 프로세스 하나에서 테스트 할 수 있는 상태로 만든다.
// 핵심 작업을 수행하는 코드 전부를 함수로 추출
public static void main(String[] args) {
    try {
        run(args)
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}

static void run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    String filename = args[args.length -1];
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        System.out.println(Stream.of(orders)
                                .filter(o -> "ready".equals(o.status))
                                .count());
        else 
        System.out.println(orders.length);
}
// Step 2값을 리턴하고 표출하도록 수정
// 기본 동작을 망치지 않으면서 run() 메서드를 검사하는 JUnit 테스트 작성 가능
// 명령줄 호출과 표준 출력에 쓰는 느리고 불편한 적업과 자주 테스트해야 할 복잡한 동작을 분리
// 험블 객체 패턴(Humble Object Pattern)
// 단, 여기서는 객체가 아니라 main() 메서드에 적용
public static void main(String[] args) {
    try {
        System.out.println(run(args))
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}

static void run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    String filename = args[args.length -1];
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

// Step 3 두 번째 단계에 해당하는 코드를 독립된 함수로 추출
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    String filename = args[args.length -1];
    return countOrders(args, filename);
}

private static long countOrders(String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}
// Step 4 중간 데이터 구조 추가
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {}

// Step 5 countOrders로 전달되는 인수를 확인, args는 첫 번째 단계에서 사용하기 떄문에 두 번째 단계까지 올 필요가 없다.
// args를 사용하는 부분을 찾아서 그 결과를 추출한다
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    boolean onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    if (onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {}
// Step 6 중간 데이터 구조로 옮긴다
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    if (commandLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
}

// Step 7 onlyCountReady에 값을 설정하는 문장을 호출한 곳으로 옮긴다
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
}

// Step 8 filename 매개변수를 중간 데이터 구조인 CommandLine에 옮긴다.
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    commandLine.filString = args[args.length -1];
    commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return countOrders(commandLine);
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
    String filename
}
// Step 9 첫번째 코드를 메서드로 추출한다
static long run(String[] args) throws IOException {
    CommandLine commandLine = parseCommandLine(args)
    return countOrders(commandLine);
}

private static CommandLine parseCommandLine(String[] args) {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    commandLine.filString = args[args.length -1];
    commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return commandLine
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
    String filename
}

// Step 10 이름 바꾸기 인라인하기 적용
static long run(String[] args) throws IOException {
    return countOrders(parseCommandLine(args));
}

private static CommandLine parseCommandLine(String[] args) {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine result = new CommandLine();
    result.filString = args[args.length -1];
    result.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return result
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
    String filename
}

// 예시 3 첫 번째 단계에 변환기 사용하기
// 명령줄 인수를 담은 문자열 배열을 두 번째 단계에 적합한 인터페이스로 바꿔주는 변환기(transformer) 객체를 만듬

static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static class CommandLine {}
// Step 1 레코드 구조 대신 동작까지 포함하는 최상위 클래스로 생성
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine();
    String filename = args[args.length -1];
    return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }
}
// Step 2 임시 변수를 질의 함수로 바꾸기
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine, args, filename(args));
}

private static String filename(String[] args) {
    return args[args.length -1];
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }
}
// Step 3 질의 함수를 클래스로 옮기기
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine, args, commandLine.filename());
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }

    String filename() {
        return args[args.length -1];
    }
}

// Step 4  함수 선언 바꾸기 
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine, args);
}

private static long countOrders(CommandLine commandLine, String[] args) throws IOException {
    File input = Paths.get(commandLine.filename()).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }

    String filename() {
        return args[args.length -1];
    }
}
// Step 5 args 제거하기 위한 조건식 추출
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine, args);
}

private static long countOrders(CommandLine commandLine, String[] args) throws IOException {
    File input = Paths.get(commandLine.filename()).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (onlyCountReady(args))
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

private static boolean onlyCountReady(String[] args) {
    return Stream.of(args).anyMatch(arg -> "-r".equals(arg))
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }

    String filename() {
        return args[args.length -1];
    }
}
// Step 6 클래스에 함수 옮기기 
static long run(String[] args) throws IOException {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine);
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.filename()).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady())
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
    }

    String filename() {
        return args[args.length -1];
    }

    boolean onlyCountReady() {
        return Stream.of(args).anyMatch(arg -> "-r".equals(arg))
    }
}

// Step 7 문장을 함수로 옮기기
static long run(String[] args) throws IOException {
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine);
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.filename()).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady())
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    else 
        return orders.length;
}

public class CommandLine {
    String[] args;
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");

    public CommandLine(String[] args) {
        this.args = args;
    }

    String filename() {
        return args[args.length -1];
    }

    boolean onlyCountReady() {
        return Stream.of(args).anyMatch(arg -> "-r".equals(arg))
    }
}