function applyOperator(op, a, b)
{ switch (op)
  { case "+": return a + b
    case "-": return a - b
    case "*": return a * b
    case "/": return a / b
    case "%": return a % b
    case "^": return Math.pow(a, b)
    default: throw Error(`unsupported operator: ${op}`)
  }
}
