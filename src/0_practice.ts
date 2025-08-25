// make a function that helps us to differentiate between microtask, macrotask, and requestAnimationFrame task

type TaskType = 'microtask' | 'macrotask' | 'animationFrame';

interface TaskResult {
  type: TaskType;
  message: string;
  timestamp: number;
  order: number;
}

class TaskDifferentiator {
  private results: TaskResult[] = [];
  private counter = 0;

  private addResult(type: TaskType, message: string): void {
    this.results.push({
      type,
      message,
      timestamp: performance.now(),
      order: ++this.counter
    });
  }

  public demonstrateTaskTypes(): Promise<TaskResult[]> {
    return new Promise((resolve) => {
      console.log('Starting task differentiation demonstration...');
      this.results = [];
      this.counter = 0;

      // Synchronous code (executed immediately)
      this.addResult('macrotask', 'Synchronous code - executed immediately');

      // Microtask (Promise.resolve) - highest priority after sync code
      Promise.resolve().then(() => {
        this.addResult('microtask', 'Microtask 1 - Promise.resolve()');
      });

      // Another microtask (queueMicrotask)
      queueMicrotask(() => {
        this.addResult('microtask', 'Microtask 2 - queueMicrotask()');
      });

      // Macrotask (setTimeout) - lower priority than microtasks
      setTimeout(() => {
        this.addResult('macrotask', 'Macrotask 1 - setTimeout(0)');
      }, 0);

      // Another macrotask with small delay
      setTimeout(() => {
        this.addResult('macrotask', 'Macrotask 2 - setTimeout(5)');
      }, 5);

      // requestAnimationFrame - scheduled for next repaint
      requestAnimationFrame(() => {
        this.addResult('animationFrame', 'Animation Frame 1 - requestAnimationFrame()');
      });

      // Another animation frame
      requestAnimationFrame(() => {
        this.addResult('animationFrame', 'Animation Frame 2 - requestAnimationFrame()');
      });

      // Nested microtask inside a microtask
      Promise.resolve().then(() => {
        this.addResult('microtask', 'Microtask 3 - First level Promise');
        
        // This will also be a microtask but executed after the current one
        Promise.resolve().then(() => {
          this.addResult('microtask', 'Microtask 4 - Nested Promise');
        });
      });

      // Use setTimeout to collect results after all tasks complete
      setTimeout(() => {
        resolve([...this.results]);
      }, 100);
    });
  }

  public async runDemo(): Promise<void> {
    const results = await this.demonstrateTaskTypes();
    
    console.log('\n=== Task Execution Order ===');
    results.forEach((result, index) => {
      console.log(`${index + 1}. [${result.type.toUpperCase()}] ${result.message} (Order: ${result.order})`);
    });

    console.log('\n=== Summary ===');
    console.log('Execution Priority:');
    console.log('1. Synchronous code (immediate)');
    console.log('2. Microtasks (Promise.then, queueMicrotask) - highest priority');
    console.log('3. requestAnimationFrame - before next repaint');
    console.log('4. Macrotasks (setTimeout, setInterval) - lowest priority');
    
    this.analyzeResults(results);
  }

  private analyzeResults(results: TaskResult[]): void {
    const groupedByType = results.reduce((acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type].push(result);
      return acc;
    }, {} as Record<TaskType, TaskResult[]>);

    console.log('\n=== Analysis ===');
    Object.entries(groupedByType).forEach(([type, tasks]) => {
      console.log(`${type.toUpperCase()}: ${tasks.length} tasks`);
      tasks.forEach((task, index) => {
        console.log(`  ${index + 1}. ${task.message}`);
      });
    });
  }
}

// Usage example and utility functions
export function demonstrateEventLoop(): void {
  const differentiator = new TaskDifferentiator();
  differentiator.runDemo();
}

// Helper function to create specific task types
export function createMicrotask(message: string, callback?: () => void): void {
  Promise.resolve().then(() => {
    console.log(`Microtask: ${message}`);
    callback?.();
  });
}

export function createMacrotask(message: string, delay: number = 0, callback?: () => void): void {
  setTimeout(() => {
    console.log(`Macrotask: ${message}`);
    callback?.();
  }, delay);
}

export function createAnimationFrameTask(message: string, callback?: () => void): void {
  requestAnimationFrame(() => {
    console.log(`Animation Frame: ${message}`);
    callback?.();
  });
}

// Run the demonstration
demonstrateEventLoop();