import { Graph } from '@/common/interfaces';
// import CommandManager from '@/common/CommandManager';
import CommandManager from '@/common/commandManager';

// 是的
export interface EditorContextProps {
  graph: Graph | null;
  executeCommand: (name: string, params?: object) => void;
  commandManager: CommandManager;
}

export interface EditorPrivateContextProps {
  setGraph: (graph: Graph) => void;
  commandManager: CommandManager;
}
